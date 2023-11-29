import rock_x25_bin from './rock-x25.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.026",
			"rotation": [
				0.12037865817546844,
				-0.32846999168395996,
				0.4874214231967926,
				0.8000230193138123
			],
			"translation": [
				0.11889629811048508,
				0.6152544021606445,
				-3.5966694355010986
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.026",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 202,
			"max": [
				0.45521074533462524,
				0.6950324177742004,
				0.542369544506073
			],
			"min": [
				-0.45577964186668396,
				-0.7407461404800415,
				-0.36607179045677185
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 202,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 202,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2118,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2120,
			"uri": rock_x25_bin
		}
	]
}