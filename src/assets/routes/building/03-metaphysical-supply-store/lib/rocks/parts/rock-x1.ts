import rock_x1_bin from './rock-x1.bin?url';

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
			"name": "rock.002",
			"rotation": [
				-0.5791060924530029,
				-0.7943545579910278,
				0.06844143569469452,
				0.17015524208545685
			],
			"translation": [
				-0.39358943700790405,
				0.4360867142677307,
				0.46518591046333313
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
			"name": "rock.002",
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
			"count": 365,
			"max": [
				0.45341092348098755,
				0.6729010939598083,
				0.5642052888870239
			],
			"min": [
				-0.44617393612861633,
				-0.6815509796142578,
				-0.4160739481449127
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 365,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 365,
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
			"byteLength": 3758,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3760,
			"uri": rock_x1_bin
		}
	]
}