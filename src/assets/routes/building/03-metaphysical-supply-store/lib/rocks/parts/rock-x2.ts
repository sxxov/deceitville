import rock_x2_bin from './rock-x2.bin?url';

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
			"name": "rock.003",
			"rotation": [
				0.23549428582191467,
				-0.6555345058441162,
				-0.6104984283447266,
				0.37697306275367737
			],
			"translation": [
				-1.1633373498916626,
				0.7284055948257446,
				-1.1429051160812378
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
			"name": "rock.003",
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
			"count": 333,
			"max": [
				0.4973856806755066,
				0.5026306509971619,
				0.5888362526893616
			],
			"min": [
				-0.3965446949005127,
				-0.7986970543861389,
				-0.43940261006355286
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 333,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 333,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3431,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3432,
			"uri": rock_x2_bin
		}
	]
}