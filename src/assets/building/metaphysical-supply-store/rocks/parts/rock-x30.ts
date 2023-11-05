import rock_x30_bin from './rock-x30.bin?url';

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
			"name": "rock.031",
			"rotation": [
				-0.7283135652542114,
				-0.23809632658958435,
				0.22848406434059143,
				0.6005535125732422
			],
			"translation": [
				0.47672930359840393,
				0.24291019141674042,
				-2.144827127456665
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
			"name": "rock.031",
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
			"count": 411,
			"max": [
				0.4137597382068634,
				0.48901206254959106,
				0.44439077377319336
			],
			"min": [
				-0.451007604598999,
				-0.8791628479957581,
				-0.4061317443847656
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 411,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 411,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1152,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4130,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 4132,
			"uri": rock_x30_bin
		}
	]
}